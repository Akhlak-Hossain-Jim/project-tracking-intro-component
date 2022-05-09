import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("/images/bg_web.png");
  background-repeat: no-repeat;
  background-size: 50vw;
  background-position: top right;
  padding-top: 64px;
  @media (max-width: 768px) {
    padding-top: 38px;
  }
  @media (max-width: 576px) {
    background-image: url("/images/bg_mob.png");
  }
`;

export const AppHeader = styled.header`
  max-width: 1173px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 50;
  padding: 0 32px;
  .brand_logo {
    width: 32px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .navigation_menu {
    .ham_menu {
      @media (min-width: 769px) {
        display: none;
      }
    }
    nav {
      display: flex;
      align-items: center;
      gap: 42px;
      .nav_link {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.03em;
        color: #242942;
        text-decoration: none;
        &.two {
          color: #9c9fb0;
        }
        &_divider {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c4c4c4;
        }
      }
      @media (max-width: 768px) {
        display: none;
      }

      &.opened {
        @media (max-width: 768px) {
          position: absolute;
          top: 120%;
          left: 0;
          right: 0;
          margin: auto;
          background: #ffffff;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
          border-radius: 6px;
          width: min(310px, 100%);
          padding: 24px 23px;
          display: flex !important;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 24px;
          .nav_link {
            &_divider {
              width: 100%;
              height: 1px;
              /* border-radius: 50%; */
              background: #c4c4c4;
            }
          }
        }
      }
    }
  }
`;

export const AppBody = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 113px;
  min-height: calc(100vh - 96px);
  @media (max-width: 548px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 41px;
  }
  .body {
    &__element {
      position: relative;
      overflow: hidden;
      display: flex;
      &:first-child {
        padding-left: 32px;
        @media (max-width: 548px) {
          padding-right: 32px;
        }
      }
      &:last-child {
        @media (max-width: 548px) {
          height: 241px;
          margin-top: 59px;
        }
      }
      &_content {
        margin: auto;
        @media (max-height: 800px) {
          margin: 50px 0px 50px auto;
        }
        &__line {
          &1 {
            display: flex;
            gap: 15px;
            align-items: center;
            padding-bottom: 8px;
            span {
              padding: 2px 10px 4px;
              font-weight: 700;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.03em;
              text-transform: uppercase;
              color: #ffffff;
              background: #232941;
              border-radius: 20px;
            }
            p {
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: 0.33em;
              color: #a0a1ac;
            }
          }
          &Title {
            display: flex;
            padding-top: 8px;
            padding-bottom: 32px;
            flex-direction: column;
            gap: 32px;
            @media (max-width: 548px) {
              padding-bottom: 20px;
              gap: 16px;
            }
            h1 {
              max-width: 470px;
              font-weight: 700;
              font-size: 64px;
              line-height: 100%;
              color: #232943;
              @media (max-width: 548px) {
                font-size: 40px;
                line-height: 100%;
              }
            }
            p {
              max-width: 267px;
              font-weight: 500;
              font-size: 18px;
              line-height: 145%;
              letter-spacing: 0.082em;
              color: #5b5f71;
            }
          }
          &Preview {
            display: flex;
            gap: 24px;
            padding-top: 32px;
            align-items: center;
            padding-bottom: 20px;
            flex-wrap: wrap;
            @media (max-width: 548px) {
              gap: 19px;
              padding-top: 7px;
            }
            button {
              padding: 15px 33px 14px;
              font-weight: 700;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.065em;
              color: #eef3f6;
              background: #ff5d5e;
              border-radius: 6px;
              border: none;
              cursor: pointer;
              outline: none;
              transition: all 0.3s ease;
              &:hover {
                opacity: 0.6;
              }
              @media (max-width: 548px) {
                padding: 11px 20px;
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.035em;
              }
            }
            p {
              text-transform: uppercase;
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
              /* identical to box height */
              letter-spacing: 0.33em;
              color: #a0a1ac;
              @media (max-width: 548px) {
                font-size: 15px;
                line-height: 18px;
                letter-spacing: 0.145em;
              }
            }
          }
        }
      }
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        width: clamp(249px, 60%, 480px);
        transform: scale(2.4) translateX(26%);
        @media (max-width: 548px) {
          width: 249px;
          transform: scale(2) translateX(26%);
        }
      }
    }
  }
`;
