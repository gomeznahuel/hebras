import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "../../common";
import { notifySuccess } from "../../helpers";
import { CopyContainer, OrderID } from "./style";

export const CopyOrder = ({ toCopy }) => {
  return (
    <CopyContainer>
      <OrderID>{toCopy}</OrderID>
      <CopyToClipboard text={toCopy} onCopy={() => notifySuccess("Copiado al portapapeles")} >
        <OrderID>
          <Button textButton="Copiar al portapapeles" />
        </OrderID>
      </CopyToClipboard>
    </CopyContainer>
  );
};
