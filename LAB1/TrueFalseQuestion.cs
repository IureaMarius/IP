using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    class TrueFalseQuestion : Question
    {
        public bool correctAnswer;
        public override int getPoints(string answer)
        {
            if (answer == "true" && correctAnswer == true)
                return TotalPoints;
            else if (answer == "false" && correctAnswer == false)
                return TotalPoints;
            else return 0;

        }
        public override string getCorrectAnswerString()
        {
            return correctAnswer.ToString();
        }
    }
}
