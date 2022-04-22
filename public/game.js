// กำหนดตัวแปร มี a กับ b เพื่อให้เข้าloopได้เฉยๆ
var round = 0
const a = -1
const b = -10
// เข้า loop เพื่อให้สุ่มได้เรื่อยๆเผื่อดวงเกลือ55555
while(a != b) {
    // function สุ่มสี
    function rdcolor() {
        var rdcolor = Math.floor(Math.random() * 10) + 1
        console.log(rdcolor)
    
        if (rdcolor == 1) {
             color_a = 'black'
             color_b = 'สีดำ'
             color_c = 'ดำ'
        }
        
        else if (rdcolor == 2) {
             color_a = 'white'
             color_b = 'สีขาว'
             color_c = 'ขาว'
        }
    
        else if (rdcolor == 3) {
             color_a = 'red'
             color_b = 'สีแดง'
             color_c = 'แดง'
        }
    
        else if (rdcolor == 4) {
             color_a = 'orange'
             color_b = 'สีส้ม'
             color_c = 'ส้ม'
        }
    
        else if (rdcolor == 5) {
             color_a = 'pink'
             color_b = 'สีชมพู'
             color_c = 'ชมพู'
        }
    
        else if (rdcolor == 6) {
             color_a = 'green'
             color_b = 'สีเขียว'
             color_c = 'เขียว'
        }
    
        else if (rdcolor == 7) {
             color_a = 'cyan'
             color_b = 'สีฟ้า'
             color_c = 'ฟ้า'
        }
    
        else if (rdcolor == 8) {
             color_a = 'blue'
             color_b = 'สีน้ำเงิน'
             color_c = 'น้ำเงิน'
        }
    
        else if (rdcolor == 9) {
             color_a = 'purple'
             color_b = 'สีม่วง'
             color_c = 'ม่วง'
        }
    
        else if (rdcolor == 10) {
             color_a = 'grey'
             color_b = 'สีเทา'
             color_c = 'เทา'
        }
        console.log(color_a)
        console.log(color_b)
        console.log(color_c)
        
    }
    // function กฏเกม
    function guesscl() {
        // กำหนด c กับ d เพื่อให้เข้า loop
        const c = -2
        const d = -12
        const p_color = document.getElementById('guess').value
        const p_round = Number(document.getElementById('round').value)
        console.log(p_color)
        console.log(p_round)
        // เข้า loop เกม
        while (c != d) {
               if (p_round <= 0) {
                    alert('ใส่เลขรอบที่เป็นไปได้ :D')
                    break
               }

               if (p_round <= 0) {
                    console.log('true')
               }

               if (p_color == color_a | p_color == color_b | p_color == color_c) {
                    // alert('You Win! press ok will refesh the website')
                    document.getElementById('result').innerHTML = 'เก่งจังวะ กดรีเกมด้วย'
                    break
               }

               if (p_color != color_a | p_color != color_b | p_color != color_c) {
                    round += 1
                    console.log('gameround',round)
                    document.getElementById('roundshow').innerHTML = round
               }

               if (p_round == round) {
                    console.log('round:',round)
                    console.log('playerround:',p_round)
                    alert('ครบจำนวนรอบ refresh the website')
                    location.reload()
               }
               break

          }
}
    break
}
function resetgame() {
     location.reload()
}
