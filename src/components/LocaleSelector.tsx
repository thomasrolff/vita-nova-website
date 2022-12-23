import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

interface IOptionButtonProps {
    active: boolean;
}

const OptionsList = styled.ul``;
const ToggleButton = styled.div.attrs({
    role: 'button',
})``;

const OptionButton = styled.li.attrs({
    role: 'button',
})<IOptionButtonProps>`
    background-color: ${({ active }) => active && colors.blue};

    a {
        color: ${({ active }) => (active ? colors.white : colors.offBlack)};
    }
`;

interface IProps {
    className?: string;
}

const BaseLocaleSelector = ({ className }: IProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const router = useRouter();
    const { locales, locale: activeLocale } = router;

    return (
        <div className={className}>
            <ToggleButton onClick={() => setShowOptions(!showOptions)}>
                {activeLocale}
            </ToggleButton>
            {showOptions && (
                <OptionsList>
                    {(locales || []).map((locale) => {
                        const { pathname, query, asPath } = router;

                        return (
                            <OptionButton
                                active={locale === activeLocale}
                                key={locale}
                                onClick={() => setShowOptions(false)}
                            >
                                <Link
                                    as={asPath}
                                    href={{ pathname, query }}
                                    legacyBehavior
                                    locale={locale}
                                >
                                    {locale}
                                </Link>
                            </OptionButton>
                        );
                    })}
                </OptionsList>
            )}
        </div>
    );
};

export const LocaleSelector = styled(BaseLocaleSelector)`
    position: relative;

    ${ToggleButton}, ${OptionsList} {
        width: 56px;
    }

    ${ToggleButton} {
        font-size: 20px;
        cursor: pointer;
        color: ${colors.offBlack};
        padding: 8px 0;
    }

    ${OptionsList} {
        position: absolute;
        background-color: ${colors.white};
    }

    ${ToggleButton}, ${OptionButton}, a {
        display: flex;
        text-align: center;
        text-transform: uppercase;
    }

    a {
        display: block;
        width: 100%;
        padding: 8px 0;
        text-align: center;
    }
`;
