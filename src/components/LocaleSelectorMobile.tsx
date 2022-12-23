import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { colors } from '../constants';

interface IOptionButtonProps {
    active: boolean;
}

const OptionButton = styled.li.attrs({
    role: 'button',
})<IOptionButtonProps>`
    background-color: ${({ active }) => active && colors.blue};

    a {
        color: ${({ active }) => (active ? colors.offWhite : colors.blue)};
    }
`;

interface IProps {
    className?: string;
    onLocaleClick(): void;
}

const BaseLocaleSelectorMobile = ({ className, onLocaleClick }: IProps) => {
    const router = useRouter();
    const { locales, locale: activeLocale } = router;

    return (
        <ul className={className}>
            {locales?.map((locale) => {
                const { pathname, query, asPath } = router;

                return (
                    <OptionButton
                        active={locale === activeLocale}
                        key={locale}
                        onClick={onLocaleClick}
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
        </ul>
    );
};

export const LocaleSelectorMobile = styled(BaseLocaleSelectorMobile)`
    display: flex;

    ${OptionButton}, a {
        text-align: center;
        text-transform: uppercase;
        width: 100%;
    }

    a {
        display: block;
        width: 100%;
        padding: 16px 0;
        text-align: center;
        font-size: 1.2rem;
    }
`;
