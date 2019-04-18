
function clear_body(){
    document.body.innerHTML = '';
}

function create_element(col,pozleft,Down,Up,Left,Right){
    var speed = 5;
    var player_el = document.createElement('div');
    player_el.style.height = '50px';
    player_el.style.width = '50px';
    player_el.style.position = 'absolute';
    player_el.style.backgroundColor = col;
    player_el.style.top = '0px';
    player_el.style.left = '0px';
    document.body.appendChild(player_el);


    var keyState = {
        up: false,
        down: false,
        left: false,
        right: false,
        up2: false,
        down2: false,
        left2: false,
        right2: false
    };

    var position = {
        top: 0,
        left: pozleft  
    };


    document.addEventListener('keydown', function(event) {
        if (event.code === Down) {
            keyState.down = true;
        } else if (event.code === Up) {
            keyState.up = true;
        } else if (event.code === Left) {
            keyState.left = true;
        } else if (event.code === Right) {
            keyState.right = true;
        }

    })

    document.addEventListener('keyup', function(event) {
        if (event.code === Down) {
            keyState.down = false;
        } else if (event.code === Up) {
            keyState.up = false;
        } else if (event.code === Left) {
            keyState.left = false;
        } else if (event.code === Right) {
            keyState.right = false;
        }
    })





    var actionInterval = setInterval(function() {
        if (keyState.up) {
            position.top--;
        }

        if (keyState.down) {
            position.top++;
        }
        
        if (keyState.left) {
            position.left--;
        }

        if (keyState.right) {
            position.left++;
        }

    });


    var drawInterval = setInterval(function() {
        player_el.style.top = position.top + 'px';
        player_el.style.left = position.left + 'px';
    }, (1000/30));
   
}
clear_body();
create_element('green','20','ArrowDown','ArrowUp', 'ArrowLeft','ArrowRight');
create_element('red','70','KeyS','KeyW','KeyA','KeyD');







