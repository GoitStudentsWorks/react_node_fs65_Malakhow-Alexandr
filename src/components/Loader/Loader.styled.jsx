import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow-y: auto;
  background-color: rgba(46, 43, 38, 0.521);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SpinWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const Spin = styled.span`
  width: 100px;
  height: 100px;
  display: block;
  margin: auto;
  position: relative;
  background: #222;
  border-radius: 50%;
  box-sizing: border-box;
  transform-origin: 170px 50px;
  border: 4px solid #333;
  box-shadow: 3px 4px #0003 inset, 0 0 6px #0002 inset;
  animation: panmov 0.4s ease-in-out infinite alternate;

  ::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) skew(-15deg, 15deg) rotate(-15deg);
    width: 55px;
    height: 53px;
    background: #fff;
    background-image: radial-gradient(circle 3px, #fff6 90%, transparent 10%),
      radial-gradient(circle 12px, #ffc400 90%, transparent 10%),
      radial-gradient(circle 12px, #ffae00 100%, transparent 0);
    background-repeat: no-repeat;
    background-position: -4px -6px, -2px -2px, -1px -1px;
    box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
    border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
    animation: ylmov 0.6s ease-in-out infinite alternate;
  }
  ::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 48px;
    height: 15px;
    width: 70px;
    background: #222222;
    border-radius: 0 8px 8px 0;
    box-shadow: 3px 0 3px #eee2 inset;
    transform: rotate(5deg) translateX(3px);
  }

  @keyframes panmov {
    0%,
    10% {
      transform: rotate(5deg);
    }
    90%,
    100% {
      transform: rotate(-5deg);
    }
  }
  @keyframes ylmov {
    to {
      border-radius: 50% 36% 50% 50% / 49% 50% 45% 45%;
      background-position: -2px -4px, 2px 2px, 1px 1px;
    }
  }
`;
