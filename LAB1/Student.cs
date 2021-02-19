using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    public class Student : IUser
    {
        private Exam currentExam;
        private List<Exam> AssignedExams;
        public Student()
        {
            AssignedExams = new List<Exam>();
        }
        public void AssignExam(Exam exam)
        {
            AssignedExams.Add(exam);

        }
        public void LogIn()
        {
            throw new NotImplementedException();
        }
        public void answerQuestion(int index, String answer)
        {
            this.currentExam.setQuestionAnswer(index, answer);
        }
        public String getQuestion(int index)
        {
            return this.currentExam.getQuestionDescription(index);
        }
        public float getGrade()
        {
            return this.currentExam.CheckGrade();
            
        }
        public String getCorrectAnswer(int index)
        {
            return this.currentExam.getQuestionCorrectAnswer(index);
        }
        public int GetRemainingTime()
        {
            return this.currentExam.getRemainingTime();
        }
        public void changeCurrentExam(int index)
        {
            if(index >=0 && index < AssignedExams.Count)
                currentExam = AssignedExams[index];
        }
        public void Submit()
        {
            this.currentExam.Submit();
        }

        public void LogOut()
        {
            throw new NotImplementedException();
        }
    }
}
