
let showTime = () => {
    let hr_dot = document.querySelector('.hr_dot')
    let min_dot = document.querySelector('.min_dot')
    let sec_dot = document.querySelector('.sec_dot')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h>12 ? "PM" : "AM";
    console.log(h,m,s);

    // 24hr to 12 hr
    // if (h > 12) {
    //     h = h - 12;
    // }
    h = (h>12) ? h-12:h;     

    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;

    hours.innerHTML = h + "<br> <span>HOURS</span>";
    minutes.innerHTML = m + "<br> <span>MINUTES</span>";
    seconds.innerHTML = s + "<br> <span>SECONDS</span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 444-(440*h)/12;
    mm.style.strokeDashoffset = 444-(440*m)/60;
    ss.style.strokeDashoffset = 444-(440*s)/60;

    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    min_dot.style.transform = `rotate(${m * 6}deg)`;
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
}


let timeInterval = setInterval(showTime)
