using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    class SingleAnswerQuestion : Question
    {
        public char correctAnswer;
        public override int getPoints(string answer)
        {
            if (answer == null)
                return 0;
            if (correctAnswer == answer[0])
                return TotalPoints;
            else return 0;

        }
        public override string getCorrectAnswerString()
        {
            return correctAnswer.ToString();
        }

    }
}
