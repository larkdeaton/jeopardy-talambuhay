import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 15; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 
            'Which state flag is this?',
        imgSrc: "https://cdn.britannica.com/14/3014-050-17B84006/flag-New-York-color-uniforms-facings-American-1909.jpg",
        answer: 'New York', //i live and always have lived in new york
    },
    {
        points: 200,
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKh90UXUZ4j0sMlcRM9zBGwCPihvd-WA8WDq3cZy23A&s=10",
        answer: 'Scotland', //i'm scottish
    },
    {
        points: 300,
        question:
            'What type of bird is this?',
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTY6W3H0-4LlSOEAJ3C_xh_4A9zSz3ggZKgjWN1GM0g&s=10",
        answer: 'Lark' //that's where I got my name
    },
    {
        points: 400,
        question: 'What do you think my first word was?',
        answer: 'dog', //this one is self explanatory
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
            'What type of tea is in the image below?',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhvJCPCCQSMUqcbE5RqKimF3pD-ZZHhAHuomg3AOfGgA&s=10',
            answer: 'Earl Grey', //my favorite type of tea
        },
        {
            points: 100,
            question:
                'What type of plant is this (generally, I don\'t need the species)',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTT683hell_7DeUUfPdmMIILLvrY3q9pSPDF4I27aJQ&s=10',
            answer: 'Bonsai', //I have a bonsai which ive just started caring for, hopefully it wont die
        },
        {
            points: 200,
            question: 'What type of dog is this',
            imgSrc: 'bernese.jpg',
            answer: 'Bernese Mountain Dog', //I have two bernese mountain dogs
        },
        {
            points: 300,
            question:
                'In France, what flower is most often associated with luck?',
            imgSrc:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4kw77z4QIZ1sSKSIC1uk5M4pJwTucJR4ueG_NM_d5Q&s=10",
                answer: 'Lily of the Valley', //these are my favourite flower
        },
    
        
      
     

    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What year am I graduating?',
        answer: '2029',
    },
    {

        points: 200,
        question:
            'What type of machine learning model is shown in the picture below?',
        imgSrc:
            "Random_forest.webp",
        answer: 'Random forest', //I just started learing how to make machine learning models, and doing competitions on kaggle to practice data science and machine learning
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