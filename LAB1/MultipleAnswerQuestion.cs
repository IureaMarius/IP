using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    class MultipleAnswerQuestion : Question
    {
        public HashSet<char> correctAnswer;
        public override int getPoints(string answer)
        {
            if (answer == null)
                return 0;
            int score = 0;
            foreach(char ans in answer)
            {
                if (correctAnswer.Contains(ans))
                    score++;
                else score--;
            }
            if (score < 0)
                score = 0;

            return score * TotalPoints / correctAnswer.Count;

        }
        public override string getCorrectAnswerString()
        {
            return correctAnswer.ToString();
        }
    }
}
