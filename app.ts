// let revenue: number = 1000;
// let bonus: number = 500;
// let str: string = 'Hi';
// let bool: boolean = true; 

// let res: number = revenue + bonus;

// function getFullName(currentUser: { firstname: string, surname: string }): string {
//     return `${currentUser.firstname} ${currentUser.surname}`;
// }

// const getFullNameArrow = (firstname: string, surname: string): string => {
//     return `${firstname} ${surname}`;
// };

// const user = {
//     firstname: 'Павел',
//     surname: 'Дубынин',
//     age: 25,
//     city: 'SPb',
//     skills: {
//         dev: true,
//         work: 'will',
//     }
// }

// !Задание 1 Типизация

// const test1 = {
//     officeId: number,
//     isOpened: boolean,
//     contacts: {
//         phone: string,
//         email: string,
//         address: {
//             city: string,
//         },
//     },
// } = { 
//     officeId: 45,
//     isOpened: 'true',
//     contacts: {
//        phone: "+79100000000",
//        email: "my@email.ru",
//        address: {
//           city: "Москва"
//        }
//     }
//  }

// const skill: string[] = ['Dev', 'Prog', 'Test'];

// for (const ski of skill) {
//     console.log(ski.toUpperCase());
// } 

// const fin = skill.filter((value: string) => value !== 'Test').map((sk) => sk + '!!!')
// console.log(fin);

// const skill: [number, string, ...boolean[]] = [1, 'Dev', true, false];
// const id = skill[0];
// const nameSkill = skill[1];

// const skill: readonly [number, string, ...boolean[]] = [1, 'Dev', true, false];

// const sk: ReadonlyArray<string> = ['dev', '111'];

// enum StatusCode {
//     SUCCESS = 1,
//     IN_PROCESS = 'p',
//     FAILED = 'f',
// }

// const result = {
//     message: 'Платеж успешен',
//     statusCode: StatusCode.SUCCESS,
// };

// // s - успех
// // p - в процессе
// // f - отклонен 

// if (result.statusCode === StatusCode.SUCCESS) {

// }

// const action = (status: StatusCode) => {

// };

// action(StatusCode.SUCCESS);

// !Задание №2
enum StatusCode {
    PUBLISHED = "published",
    DRAFT = "draft",
    DELETED = "deleted",
}
// Запрос
const request = {
    topicId: 5,
    status: StatusCode.PUBLISHED, // "draft", "deleted"
}


async function getFaqs (req: {
    topicId: number, 
    status: StatusCode,
}): Promise<{
        question: string,
        answer: string,
        tags: Array<string>, // string[]
        likes: number,
        status: StatusCode,
    }[]> {
    const res = await fetch('/faqs', {
       method: 'POST',
       body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
 }

 getFaqs(request);

// Ответ
[
    {
       "question": "Как осуществляется доставка?",
       "answer": "быстро!",
       "tags": [
          "popular",
          "new"
       ],
       "likes": 3,
       "status": "published"
    }
]

let car: { makeId: number[], name: string };
car = { makeId: [1], name: 'Audi' };
