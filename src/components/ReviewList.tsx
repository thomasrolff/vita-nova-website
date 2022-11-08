import styled from 'styled-components';
import { colors } from '../constants';
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
            text: 'Leuke locatie, unieke slaapplek op de boot, vriendelijke gastvrouw en vlakbij het centrum! ',
        },
        {
            author: 'Eenlangevoornaam (NL)',
            text: 'Leuke locatie, unieke slaapplek op de boot, vriendelijke gastvrouw en vlakbij het centrum! ',
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
    max-width: 600px;

    ${ReviewItem} {
        display: flex;
        margin-bottom: 48px;
    }

    ${AuthorContainer} {
        margin-right: 24px;
        width: 280px;
    }

    h4 {
        font-size: 16px;
    }

    ${Text} {
        margin: 0;
        line-height: 1.5;
    }

    ${Quote} {
        fill: ${colors.blue};
        height: 48px;
        width: 48px;
        margin-bottom: 12px;
    }
`;
