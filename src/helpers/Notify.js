import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const customId = "custom-id-yes";

export const notifySuccess = (message) =>
  toast.success(message, {
    toastId: customId,
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: "3000",
  });

export const notifyError = (message) =>
  toast.error(message, {
    toastId: customId,
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: "3000",
  });

export const notifyWarning = (message) =>
  toast.warning(message, {
    toastId: customId,
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: "3000",
  });
