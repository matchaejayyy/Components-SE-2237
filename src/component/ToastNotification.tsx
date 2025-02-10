import { toast, ToastPosition } from 'react-toastify';

const showToast = (type: 'success' | 'warn' | 'info', message: string) => {
  const options = { position: 'top-right' as ToastPosition, autoClose: 1500 };

  if (type === 'success') toast.success(message, options);
  else if (type === 'warn') toast.warn(message, options);
  else if (type === 'info') toast.info(message, options);
};

export default showToast;
