
const verses = ["John 3:16",
"Jer 29:11",
"Rom 8:28",
"Phil 4:13",
"Gen 1:1",
"Prov 3:5",
"Prov 3:6",
"Rom 12:2",
"Phil 4:6",
"Matt 28:19",
"Eph 2:8","Gal 5:22","Rom 12:1","John 10:10","Acts 18:10","Acts 18:9","Acts 18:11","Gal 2:20","1 John 1:9","Rom 3:23","John 14:6","Matt 28:20","Rom 5:8","Phil 4:8","Phil 4:7","Josh 1:9","Isa 40:31","Eph 2:9","Rom 6:23","Gal 5:23","Isa 53:5","1 Pet 3:15","2 Tim 3:16","Matt 6:33","Heb 12:2","1 Pet 5:7","Eph 2:10","1 Cor 10:13","Matt 11:28","Heb 11:1","2 Cor 5:17","Heb 13:5","2 Cor 12:9","Rom 10:9","Isa 41:10","Gen 1:26","Matt 11:29","John 16:33","Acts 1:8","2 Tim 1:7","Isa 53:4","2 Cor 5:21","Rom 15:13","John 11:25","Heb 11:6","John 5:24","Jas 1:2","Isa 53:6","Acts 2:38","Eph 3:20","Matt 11:30","Gen 1:27","Col 3:12","Heb 12:1","Jas 5:16","Acts 17:11","Phil 4:19","John 1:1","1 Cor 6:19","1 John 3:16","Ps 133:1","John 14:27","Heb 4:12","John 15:13","Mic 6:8","Rom 10:17","John 1:12","Jas 1:12","Jas 1:3","Rom 8:38","Rom 8:39","Heb 10:25","2 Pet 1:4","Phil 1:6","Ps 133:3","Heb 4:16","Ps 37:4","John 3:17","Acts 4:12","Isa 26:3","1 Pet 2:24","Josh 1:8","Matt 28:18","Col 3:23","Matt 22:37","Ps 133:2","Matt 5:16","Isa 55:8","Heb 4:15",
"John 13:35"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export default function generateVerse(){
    response verses[getRandomInt(100)]
}