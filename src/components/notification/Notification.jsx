import { notification } from 'antd';

export const getNotification = (
  type = 'success',
  message = 'Success',
  description = ''
) => {
  return notification[type]({ message: message, description: description });
};
