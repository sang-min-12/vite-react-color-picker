import BoxList from './components/BoxList'
import ColorPicker from './components/ColorPicker'
import ImageArea from './components/ImageArea'

function App() {
  return (
    <div className='p-[20px]'>
      <h1 className="mb-[30px] text-3xl font-bold">
        Canvas Image Color Change
      </h1>
      <div className="flex gap-3 w-full">
        <BoxList
          title={"이미지 영역"}
        >
          <ImageArea />
        </BoxList>
        <BoxList
          title={"색상 선택"}
        >
          <ColorPicker />
        </BoxList>
      </div>
    </div>
  )
}

export default App;