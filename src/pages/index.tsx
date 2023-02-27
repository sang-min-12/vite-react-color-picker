import BoxList from "../components/BoxList";
import ColorPicker from "../components/ColorPicker";
import Heading from "../components/Heading";
import ImageArea from "../components/ImageArea";

const Main = () => {
  return (
    <div>
      <Heading level="h2" className="mb-4 text-center">
        Index
      </Heading>
      <div className="flex gap-3 w-full">
        <BoxList title={"이미지 영역"}>
          <ImageArea />
        </BoxList>
        <BoxList title={"색상 선택"}>
          <ColorPicker />
        </BoxList>
      </div>
    </div>
  );
};

export default Main;
