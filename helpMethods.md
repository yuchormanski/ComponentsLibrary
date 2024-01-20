window. scrollTo(0, 0) - go to start of the page

<!-- Broken images fix  -->

const onImageError = (e) => {
e.target.src = imgReplacement;
};

        <img
          src={img? img : imgReplacement}
          alt="user photo"
          className={styles.avatar}
          onError={onImageError}
        />
