using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    public class Professor : IUser
    {
        public Dictionary<Guid, Exam> Exams;
        public Guid CreateExam(List<Question> questions, int Duration)
        {
            Guid examID = new Guid();
            Exams = new Dictionary<Guid, Exam>();
            Exams.Add(examID, new Exam(questions, Duration));
            return examID;
        }

        public void LogIn()
        {
            throw new NotImplementedException();
        }

        public void LogOut()
        {
            throw new NotImplementedException();
        }
    }
}
