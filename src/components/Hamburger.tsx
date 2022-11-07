import styled from 'styled-components';
import { colors } from '../constants';

const Line = styled.div``;

interface IProps {
    className?: string;
    menuOpen: boolean;
    onClick(): void;
}

const BaseHamburger = ({ className, onClick }: IProps) => (
    <div className={className} onClick={onClick}>
        <Line className="top-bar" />
        <Line className="middle-bar" />
        <Line className="bottom-bar" />
    </div>
);

export const Hamburger = styled(BaseHamburger)`
    position: relative;
    height: 100%;
    width: 25px;
    transform: translateY(50%);

    ${Line} {
        position: absolute;
        width: 100%;
        display: block;
        height: 2px;
        background-color: ${colors.blue};
        animation-timing-function: ease;
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
        align-self: center;
    }

    .top-bar {
        animation-name: ${({ menuOpen }) =>
            menuOpen ? 'topAnimation' : 'topAnimationBackwards'};
    }
    .middle-bar {
        animation-name: ${({ menuOpen }) =>
            menuOpen ? 'middleAnimation' : 'middleAnimationBackwards'};
    }
    .bottom-bar {
        animation-name: ${({ menuOpen }) =>
            menuOpen ? 'bottomAnimation' : 'bottomAnimationBackwards'};
    }

    // keyframes
    @keyframes topAnimation {
        0% {
            top: -6px;
        }
        40% {
            top: 0;
        }
        60% {
            top: 0;
            transform: rotate(0);
        }
        100% {
            top: 0;
            transform: rotate(45deg);
        }
    }

    @keyframes middleAnimation {
        60% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(45deg);
        }
    }

    @keyframes bottomAnimation {
        0% {
            top: 6px;
        }
        40% {
            top: 0;
        }
        60% {
            top: 0;
            transform: rotate(0);
        }
        100% {
            top: 0;
            transform: rotate(-45deg);
        }
    }

    @keyframes topAnimationBackwards {
        0% {
            top: 0;
            transform: rotate(-45deg);
        }
        60% {
            transform: rotate(0);
            top: 0;
        }
        100% {
            top: -6px;
        }
    }

    @keyframes middleAnimationBackwards {
        0% {
            top: 0;
            transform: rotate(-45deg);
        }
        60% {
            transform: rotate(0);
            top: 0;
        }
    }

    @keyframes bottomAnimationBackwards {
        0% {
            top: 0px;
            transform: rotate(45deg);
        }
        60% {
            transform: rotate(0);
            top: 0;
        }
        100% {
            top: 6px;
        }
    }
`;
