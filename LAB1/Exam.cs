using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LAB1
{
    public class Exam
    {
        private bool submitted;
        private float Grade;
        private String[] answers;
        private int TotalDuration;
        private DateTime startTime;
        public Exam(List<Question> questions, int Duration) {
            Questions = questions;
            startTime = DateTime.Now;
            TotalDuration = Duration;

            answers = new String[questions.Count];
            submitted = false;
        }

        List<Question> Questions;
        public String getQuestionDescription(int index)
        {
            if (index >= 0 && index < Questions.Count)
                return Questions[index].Description;
            else
                return null;

        }
        public int getRemainingTime()
        {
            return TotalDuration - (int)(DateTime.Now - startTime).TotalSeconds;

        }
        public void setQuestionAnswer(int index, String answer)
        {
            if(submitted == false)
                answers[index] = answer;
        }
        public String getQuestionCorrectAnswer(int index)
        {
            if (submitted == true)
                return Questions?[index].getCorrectAnswerString();
            return null;
        }
        public void Submit()
        {
            int index = 0;
            int score = 0;
            int maxScore = 0;
            foreach(Question q in Questions)
            {
                maxScore += q.TotalPoints;
                score += q.getPoints(answers[index]);
                index++;
            }
            submitted = true;
            Grade = (float)score / maxScore;

        }
        public float CheckGrade()
        {
            return Grade;
        }
    }
}
