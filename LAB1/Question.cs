using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LAB1
{
    public abstract class Question
    {
        public String Description { get; set; }
        public int TotalPoints { get; set; }

        abstract public int getPoints(string answer);
        abstract public string getCorrectAnswerString();


    }
}
