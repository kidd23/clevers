import HTMLFlipBook from "react-pageflip";

function MyBook(props) {
  return (
    <HTMLFlipBook width={300} height={500}>
      <div className="demoPage">Page1</div>
      <div className="demoPage">Page2</div>
      <div className="demoPage">Page3</div>
      <div className="demoPage">Page4</div>
    </HTMLFlipBook>
  );
}