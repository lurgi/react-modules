import "./App.css";
import { AlertModal, useModalAction } from "./lib/";

function App() {
  const { handleOpen } = useModalAction();

  return (
    <>
      <h1>Component Modules</h1>
      <button onClick={handleOpen}></button>
      {/* <Modal.Small
        buttonDirection="row"
        position="center"
        title="카드사 선택"
        confirmMessage="확인 메세지"
        cancelMessage="취소"
        hasConfirmButton={true}
        closeButtonPosition="bottom"
      >
        <div>hello, world</div>
      </Modal.Small> */}
      <AlertModal.Large title="카드번호를 입력하세요.">여기에는 alert내부 컨텐츠가 들어갑니다</AlertModal.Large>
    </>
  );
}

export default App;
