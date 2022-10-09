import styled from 'styled-components';
import { colors } from '../constants';

const Line = styled.div``;

interface IProps {
    className?: string;
    onClick(): void;
}

const BaseHamburger = ({ className, onClick }: IProps) => (
    <div className={className}>
        <input id="hamburger" type="checkbox" onChange={onClick} />
        <label htmlFor="hamburger">
            <Line className="top-bar" />
            <Line className="middle-bar" />
            <Line className="bottom-bar" />
        </label>
    </div>
);

export const Hamburger = styled(BaseHamburger)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 25px;

    input {
        display: none;
    }

    // Todo: add label padding for clickability
    label {
        position: relative;
    }

    input[type='checkbox'] + label {
        ${Line} {
            position: absolute;
            width: 100%;
            display: block;
            height: 2px;
            background-color: ${colors.blue};
            animation-timing-function: ease-out;
            animation-duration: 0.25s;
            animation-fill-mode: forwards;
            align-self: center;
        }

        .top-bar {
            animation-name: topAnimationBackwards;
        }
        .middle-bar {
            animation-name: middleAnimationBackwards;
        }
        .bottom-bar {
            animation-name: bottomAnimationBackwards;
        }
    }

    input[type='checkbox']:checked + label {
        .top-bar {
            animation-name: topAnimation;
        }
        .middle-bar {
            animation-name: middleAnimation;
        }
        .bottom-bar {
            animation-name: bottomAnimation;
        }
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
