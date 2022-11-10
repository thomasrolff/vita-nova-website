import styled from 'styled-components';
import { breakpoints, colors } from '../constants';
import { Quote } from '../svg';

const ReviewItem = styled.li``;
const AuthorContainer = styled.div``;
const Text = styled.p``;

interface IProps {
    className?: string;
}

const BaseReviewList = ({ className }: IProps) => {
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
        <ul className={className}>
            {reviews.map((review) => (
                <ReviewItem key={review.author}>
                    <AuthorContainer>
                        <Quote />
                        <h4>{review.author}</h4>
                    </AuthorContainer>
                    <Text>{review.text}</Text>
                </ReviewItem>
            ))}
        </ul>
    );
};

export const ReviewList = styled(BaseReviewList)`
    color: ${colors.blue};

    ${ReviewItem} {
        display: flex;
        flex-direction: column-reverse;
        font-size: 20px;
        margin-bottom: 48px;

        @media (${breakpoints.mediumMin}) {
            flex-direction: row;
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

    ${Quote} {
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

    ${Text} {
        margin: 0;
        line-height: 1.6;
        max-width: 600px;
    }
`;
