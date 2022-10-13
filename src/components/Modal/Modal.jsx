import { Component } from 'react';
import style from '../Modal/Modal.module.css';

export class Modal extends Component {
  closeByEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }
  componentDidUpdate() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByBackDrop = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const {
      image: { src, alt },
      closeModal,
    } = this.props;

    return (
      <div className={style.backdrop} onClick={this.closeByBackDrop}>
        <div className={style.modal}>
          <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={alt} />
          <button className={style.btn} type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
