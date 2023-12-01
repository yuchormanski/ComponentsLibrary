// In parent component:
// const [background, setBackground] = useState(false);
// const [currentComponent, setCurrentComponent] = useState({});

// function onButtonClick(component) {
//   setCurrentOrder(component);
//   setBackground(true);
// }

// function close(e) {
//   setCurrentOrder({});
//   setBackground(false);
// }

// return (
//   <>
//     {background && (
//       <Popup onClose={close}>
//         {children component}
//       </Popup>
//     )}

//     <button onClick={() => onButtonClick(component)}></button>
//     </>
// );

import styles from "./Popup.module.css";

function Popup({ children, onClose }) {
  return (
    <div className={styles.modalBg} onClick={onClose}>
      <figure className={styles.fullInfo} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeIcon} onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        {children}
      </figure>
    </div>
  );
}

export default Popup;
