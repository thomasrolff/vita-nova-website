import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { QuoteIcon } from '../svg';
import { LinkButton } from './LinkButton';

const QuoteText = styled.p``;
const BookingText = styled.p``;
const AuthorContainer = styled.div``;
const BookingContainer = styled.div``;

interface IProps {
    className?: string;
}

const BaseReviewSection = ({ className }: IProps) => {
    const reviews = [
        {
            author: 'Estelle (NL)',
            text: '"Leuke locatie, unieke slaapplek op de boot, vriendelijke gastvrouw en vlakbij het centrum!"',
        },
        {
            author: 'Eelco (NL)',
            text: '"Schoon, netjes, aardige en behulpzame gastvrouw, heerlijk ontbijt. Alles klopt!"',
        },
    ];

    return (
        <section className={className}>
            <ul>
                {reviews.map((review) => (
                    <li key={review.author}>
                        <AuthorContainer>
                            <QuoteIcon />
                            <h4>{review.author}</h4>
                        </AuthorContainer>
                        <QuoteText>{review.text}</QuoteText>
                    </li>
                ))}
            </ul>
            <BookingContainer>
                <BookingText>
                    Ook een onvergetelijke ervaring op B&B Vita Nova? Bekijk de
                    beschikbaarheid en boek een van onze fantastische kamers!
                </BookingText>
                <LinkButton
                    href="https://booking.roomraccoon.com/vita-nova-scheepshotel-b-b/nl/"
                    targetBlank
                    title="Bekijk beschikbaarheid"
                />
            </BookingContainer>
        </section>
    );
};

export const ReviewSection = styled(BaseReviewSection)`
    color: ${colors.blue};

    li {
        display: flex;
        flex-direction: column-reverse;
        font-size: 20px;
        margin-bottom: 48px;

        @media (${breakpoints.mediumMin}) {
            flex-direction: row;
            margin-bottom: 72px;
        }
    }

    ${AuthorContainer} {
        display: flex;
        flex-direction: row-reverse;
        margin-top: 12px;

        @media (${breakpoints.mediumMin}) {
            flex-direction: column;
            width: 140px;
            margin: 0;
        }
    }

    ${QuoteIcon} {
        fill: ${colors.blue};
        height: 36px;
        width: 36px;
        padding-top: 3px;
        margin-bottom: 12px;
    }

    h4 {
        font-size: 16px;
        margin-right: 12px;
    }

    ${QuoteText}, ${BookingText} {
        line-height: 1.6;
        max-width: 600px;
    }

    ${QuoteText} {
        margin: 0;
    }

    ${BookingContainer} {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        ${LinkButton} {
            margin-top: 16px;
        }
    }
`;
