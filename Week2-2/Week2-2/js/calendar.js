// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringhtml = "<tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td></tr><tr><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td></tr><tr><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td></tr><tr><td>29</td><td>30</td></tr>";

hotelTable.innerHTML += stringhtml;
var monthLength = 30;

if (this.month == 1) { // February only!
  if ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
    monthLength = 29;
  }
}

var day = 1;
// this loop is for is weeks (rows)
for (var i = 0; i < 9; j++) {
  // this loop is for weekdays (cells)
  for (var j = 0; j <= 6; j++) { 
    stringhtml += '<td class="calendar">';
    if (day <= monthLength && (i > 0 || j >= startingDay)) {
      stringhtml += day;
      day++;
    }
    stringhtml += '</td>';
  }
  // stop making rows if we've run out of days
  if (day > monthLength) {
    break;
  } else {
    stringhtml += '</tr><tr>';
  }
}

stringhtml += '</tr></table>';

this.stringhtml = stringhtml;
var stringhtmlEle = document.getElementById("hotelCalendarTable");
stringhtmlEle.textContent = "" + total;


