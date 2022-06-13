import { Text } from "./TextTest.element";

const TextTest = ({ className, text }) => {
  return (
    <>
      <Text className={className}>{text}</Text>
    </>
  );
};

export default TextTest;
