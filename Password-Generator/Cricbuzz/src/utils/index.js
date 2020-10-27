import React, {useState, useEffect} from 'react';
import {Platform, NetInfo, Dimensions} from 'react-native';
import {Color} from './Color';
import DateUtils from './DateUtils';
import Constants from './Constants';
import CommonStyle from './CommonStyles';
import ThemeUtils from './ThemeUtils';
import UtilityManager from './UtilityManager';
import {Toast} from 'src/Component';

import moment from 'moment';

const {Version, OS} = Platform;

export const IS_ANDROID = OS === 'android';
export const IS_IOS = OS === 'ios';
export const IS_LT_LOLLIPOP = Version < 21;

// use for check internet connection
const isNetworkConnected = () => {
  if (Platform.OS === 'ios') {
    return new Promise((resolve) => {
      const handleFirstConnectivityChangeIOS = (isConnected) => {
        NetInfo.isConnected.removeEventListener(
          'change',
          handleFirstConnectivityChangeIOS,
        );
        resolve(isConnected);
      };
      NetInfo.isConnected.addEventListener(
        'change',
        handleFirstConnectivityChangeIOS,
      );
    });
  }

  return NetInfo.isConnected.fetch();
};

const showMessage = (message, messageType, options = {}) => {
  //TODO: add method to show the message here
  switch (messageType) {
    case Constants.MessageType.SUCCESS:
      return Toast.getInstance().show(message, {
        // title: "Success",
        ...options,
        backgroundColor: Color.SUCCESS,
      });
    case Constants.MessageType.FAILED:
      return Toast.getInstance().show(message, {
        // title: "Failed",
        ...options,
        backgroundColor: Color.FAILED,
      });
    case Constants.MessageType.INFO:
      return Toast.getInstance().show(message, {
        // title: "Info",
        ...options,
        backgroundColor: Color.INFO,
      });
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Contacted':
      return Color.CONTACTED;
    case 'Showing':
      return Color.SHOWING;
    case 'In Contract':
      return Color.IN_CONTRACT;
    case 'Dead':
      return Color.DEAD;
    case 'Archive':
      return Color.ARCHIVE;
    case 'New':
      return Color.NEW_LEAD;
    case 'Attempted Contact':
      return Color.ATTEMPTED_CONTACT;
    case 'Has a Realtor':
      return Color.HAS_REALTOR;
    case 'Sold':
      return Color.SOLD;
    default:
      return Color.TRANSPARENT;
  }
};

const getInteractionIcon = (type) => {
  switch (type) {
    case 'outgoing':
    case 'incoming':
      return 'call';
    case 'sms':
      return 'text-message';
    case 'email':
      return 'email';
    default:
      return 'call';
  }
};

function useDeviceOrientation() {
  const [deviceOrientation, setDeviceOrientation] = useState(null);

  useEffect(() => {
    function updateState() {
      const {height, width} = Dimensions.get('window');
      if (height >= width) {
        setDeviceOrientation('portrait');
      } else {
        setDeviceOrientation('landscape');
      }
    }

    updateState(); // for initial render
    Dimensions.addEventListener('change', updateState);
    return () => Dimensions.removeEventListener('change', updateState);
  }, []);

  return deviceOrientation;
}

const getTimeAgoString = (timestamp) => {
  return moment
    .unix(timestamp / 1000)
    .startOf('hour')
    .fromNow();
};

const getFormattedAddress = (addrObj) => {
  let formatted = '';
  if (addrObj.address) {
    formatted += `${addrObj.address}`;
  }
  if (addrObj.city) {
    formatted += `, ${addrObj.city}`;
  }
  if (addrObj.state) {
    formatted += `, ${addrObj.state}`;
  }
  if (addrObj.zip_code) {
    formatted += `, ${addrObj.zip_code}`;
  }
  return formatted;
};

const getListStyle = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    return null;
  }
  return CommonStyle.full_center;
};

const numberWithCommas = (x) => {
  return x
    .toString()
    .split('.')[0]
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const formatPrice = (number) => {
  const COUNT_ABBRS = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  let decimals = number < 1000000 ? 0 : 2;
  const i =
    number === 0 ? number : Math.floor(Math.log(number) / Math.log(1000));
  let result = parseFloat((number / Math.pow(1000, i)).toFixed(decimals));
  result += `${COUNT_ABBRS[i]}`;
  return result;
};

const getFilterString = (selectedFilter) => {
  let filteredString = '';
  Object.values(selectedFilter).map((item) => {
    switch (item.key) {
      /*
            PROPERTY_TYPE,
            PRICE_RANGE,
            YEARS,
            PARKING_SPACE,
            BEDROOMS,
            HOME_SQFT,
            BATHROOMS,
            LOT,
            LISTING_STATUS,
            HEATING,
            HOA,
            INSIDE_FEATURE,
            NOS,
            OUTSIDE_FEATURE,
            SCHOOLS,
            VIEWS
            */
      case 'max_hoa':
        filteredString = filteredString.concat(`$${item.val}/month, `);
        break;
      /*case 'price':
                filteredString = filteredString.concat(`${item.min ? formatPrice(item.min) : 'Any'}-${item.max ? formatPrice(item.max) : 'Any'}, `);
                break;*/
      case 'living_area':
        filteredString = filteredString.concat(
          `${item.min ? item.min : 'Any'}-${
            item.max ? item.max : 'Any'
          } Sqft, `,
        );
        break;
      case 'status':
        filteredString = filteredString.concat(
          `${Constants.LISTING_STATUS.filter((statusItem) =>
            item.val.includes(statusItem.value),
          ).map((statusItem) => statusItem.name)}, `,
        );
        break;
      case 'lot_size_square_feet':
        let min = item.min
          ? parseFloat(item.min) / 43560 < 1
            ? item.min
            : parseFloat(item.min) / 43560
          : 'Any';
        let max = item.max
          ? parseFloat(item.max) / 43560 < 1
            ? item.max
            : parseFloat(item.max) / 43560
          : 'Any';
        filteredString = filteredString.concat(`${min}-${max} lot, `);
        break;
      case 'garage_spaces':
        filteredString = filteredString.concat(
          `${numberWithCommas(item.val)} Garage space, `,
        );
        break;
      case 'stories_total':
        filteredString = filteredString.concat(`${item.val} Stories, `);
        break;
      case 'cooling':
        filteredString = filteredString.concat('Must have AC, ');
        break;
      case 'bedrooms':
      case 'full_bathrooms':
      case 'price':
        break;
      default:
        if (item.val) {
          filteredString = filteredString.concat(`${item.val}, `);
        }
        if (item.min || item.max) {
          filteredString = filteredString.concat(
            `${item.min ? item.min : 'Any'}-${item.max ? item.max : 'Any'}, `,
          );
        }
    }
  });
  return filteredString.trim();
};

const convertLabels = (str, toCamelCase) => {
  if (toCamelCase) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  }
  return (
    str
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
};

const pstDateConvert = (date) => {
  return moment
    .tz(
      moment(date).format(DateUtils.YYYY_MM_DD),
      DateUtils.YYYY_MM_DD,
      'America/Los_Angeles',
    )
    .utc()
    .format(DateUtils.YYYY_MM_DD);
};

const pstTimeConvert = (date) => {
  return moment
    .tz(
      moment(date).format(DateUtils.HH_mm_ss),
      DateUtils.HH_mm_ss,
      'America/Los_Angeles',
    )
    .utc()
    .format(DateUtils.HH_mm_ss);
};

const PSTDateTimeFromTimeStamp = (time) => {
  return moment
    .unix(time)
    .tz('America/Los_Angeles')
    .format(DateUtils.MM_dd_yyyy_hh_mm_a);
};

const getDateTimeForNotification = (timestamp) => {
  if (timestamp) {
    if (
      moment().diff(
        moment(
          moment(timestamp).format(DateUtils.dd_mm_yyyy),
          DateUtils.dd_mm_yyyy,
        ),
        'd',
      ) === 0
    ) {
      return moment(timestamp).fromNow();
    } else {
      return moment(timestamp).format(DateUtils.dd_mm_yyyy_hh_mm);
    }
  } else {
    return moment().format(DateUtils.dd_mm_yyyy_hh_mm);
  }
};

export {
  Color,
  DateUtils,
  isNetworkConnected,
  Constants,
  CommonStyle,
  ThemeUtils,
  showMessage,
  getStatusColor,
  getInteractionIcon,
  UtilityManager,
  useDeviceOrientation,
  getTimeAgoString,
  getFormattedAddress,
  getListStyle,
  numberWithCommas,
  getFilterString,
  formatPrice,
  convertLabels,
  pstDateConvert,
  pstTimeConvert,
  PSTDateTimeFromTimeStamp,
  getDateTimeForNotification,
};
