using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    [TestFixture]
    class MyTests
    {
        private Student CreateStudentWithExam()
        {
            SingleAnswerQuestion q1 = new SingleAnswerQuestion();
            q1.Description = "What is the mitochondria? A. A fast food place, B. an alien race, C. The powerhouse of the cell";
            q1.TotalPoints = 10;
            q1.correctAnswer = 'C';
            List<Question> temp = new List<Question>();
            temp.Add(q1);
            Exam exam = new Exam(temp, 300);
            Student stud = new Student();
            stud.AssignExam(exam);
            stud.changeCurrentExam(0);
            return stud;
        }
        [TestCase]
        public void StudentCanGetQuestion()
        {
            Student stud = CreateStudentWithExam();
            Assert.IsTrue(String.Equals(stud.getQuestion(0), "What is the mitochondria? A. A fast food place, B. an alien race, C. The powerhouse of the cell"));
        }
        [TestCase]
        public void StudentCantCheckUnsubmitted()
        {
            Student stud = CreateStudentWithExam();
            Assert.AreEqual(null, stud.getCorrectAnswer(0));

        }
        [TestCase]
        public void StudentCantSubmitTwice()
        {
            Student stud = CreateStudentWithExam();
            stud.Submit();
            stud.answerQuestion(0, "C");
            Assert.AreEqual(0, stud.getGrade());

        }
        [TestCase]
        public void StudentCantAskOutOfRange()
        {
            Student stud = CreateStudentWithExam();
            Assert.AreEqual(null, stud.getQuestion(153484352));
        }
    }
}
