// 2_1_1 Fix an event handler
/*
Щелчок на этой кнопке должен переключить фон страницы между белым и черным. Однако при нажатии ничего не происходит. Исправьте проблему. (Не беспокойтесь о логике внутри handleClick - эта часть в порядке).
*/

export default function LightSwitch() {
  function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
          bodyStyle.backgroundColor = 'white';
      } else {
          bodyStyle.backgroundColor = 'black';
      }
  }

  return (
      <button onClick={handleClick}>
          Toggle the lights
      </button>
  );
}