import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 10; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 
            'Which state flag is this',
        imgSrc: "https://cdn.britannica.com/14/3014-050-17B84006/flag-New-York-color-uniforms-facings-American-1909.jpg",
        answer: 'New York',
    },
    {
        points: 200,
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKh90UXUZ4j0sMlcRM9zBGwCPihvd-WA8WDq3cZy23A&s=10",
        answer: 'Scotland',
    },
    {
        points: 300,
        question:
            'lalalalalalalalalalalalalalala',
        answer: 'Dartmouth'
    },
    {
        points: 400,
        question: 'Who wrote the Critique of Pure Reason?',
        answer: 'Immanuel Kant',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
            'What type of tea is in the image below?',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvJCPCCQSMUqcbE5RqKimF3pD-ZZHhAHuomg3AOfGgA&s=10',
            answer: 'Earl Grey',
        },
        {
            points: 100,
            question:
                '',
            imgSrc: 'https://www.aforkstale.com/wp-content/uploads/how-to-make-homemade-tahini-1200-x-1200.jpg',
            answer: 'Sesame',
        },
        {
            points: 200,
            question: 'What type of dog is this',
            imgSrc: 'bernese.jpg',
            answer: 'Bernese Mountain Dog',
        },
        {
            points: 300,
            question:
                'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
            imgSrc:
                "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
            answer: 'Italy',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This type of 2D drawing allows you to see the sides of a 3D object at the same scale.',
        imgSrc:
            "https://static.mathigon.org/cms/a8141a111490d026fa6578a4933d1d47.png",
        answer: 'Isometric',
    },
    {

        points: 200,
        question:
            'What type of model is shown in the picture below',
        imgSrc:
            "Random_forest.webp",
        answer: 'Random forest',
    }
   
]);


const categories = [
    {
        title: "Lark's Past",
        questions: pastQuestions
    },
    {
        title: "Lark's Present",
        questions: presentQuestions
    },
    {
        title: "Lark's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}