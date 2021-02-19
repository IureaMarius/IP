using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Question> questions = new List<Question>();
            SingleAnswerQuestion q1 = new SingleAnswerQuestion();
            q1.Description = "What is the mitochondria? A. A fast food place, B. an alien race, C. The powerhouse of the cell";
            q1.TotalPoints = 10;
            q1.correctAnswer = 'C';
            TrueFalseQuestion q2 = new TrueFalseQuestion();
            q2.Description = "Is a hotdog a sandwich? true or false";
            q2.TotalPoints = 1000;
            q2.correctAnswer = false;
            MultipleAnswerQuestion q3 = new MultipleAnswerQuestion();
            q3.Description = "What numbers are over 12? A. -12, B. 12, C. 89, D. 1000";
            q3.TotalPoints = 10;
            q3.correctAnswer = new HashSet<char>();
            q3.correctAnswer.Add('C');
            q3.correctAnswer.Add('D');

            questions.Add(q1);
            questions.Add(q2);
            questions.Add(q3);
            Professor prof = new Professor();
            Guid examID = prof.CreateExam(questions, 300);

            Student examTaker = new Student();
            examTaker.AssignExam(prof.Exams[examID]);
            examTaker.changeCurrentExam(0);

            string command = null;
            while(examTaker.GetRemainingTime() > 0)
            {
                Console.WriteLine("Remaining time:" + examTaker.GetRemainingTime() + " seconds");
                Console.WriteLine("Available Commands: GetDescription, SetAnswer, Submit, CheckGrade, GetCorrectAnswer");
                command = Console.ReadLine();
                string temp;
                switch(command)
                {
                    case "GetDescription":
                        Console.WriteLine("Which question number?");
                        temp = Console.ReadLine();
                        Console.WriteLine(examTaker.getQuestion(int.Parse(temp)));
                        break;

                    case "SetAnswer":
                        Console.WriteLine("Which question number?");
                        temp = Console.ReadLine();
                        Console.WriteLine("Answer:");

                        examTaker.answerQuestion(int.Parse(temp), Console.ReadLine());
                        break;
                    case "Submit":
                        examTaker.Submit();
                        break;
                    case "CheckGrade":
                        Console.WriteLine("Your grade: " + examTaker.getGrade());
                        break;
                    case "GetCorrectAnswer":
                        Console.WriteLine("Which question number?");
                        temp = Console.ReadLine();
                        Console.WriteLine(examTaker.getCorrectAnswer(int.Parse(temp)));
                        break;
                    default:
                        Console.WriteLine("unrecognizable command, please try another command");
                        break;
                }
                
            }
        }
    }
}
