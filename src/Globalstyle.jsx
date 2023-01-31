import { createGlobalStyle } from "styled-components";

export const  Globastyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'League Spartan', sans-serif;
  
}
.App{
    height: 100vh;
    padding: 4rem 0rem;
}
:root{
  --bg-color:pink;
  --transition:500ms;
  /* ! theme 1 */
  /*? #### Backgrounds */

--main1-background: hsl(222, 26%, 31%);
--toggle1-background-keypad-background: hsl(223, 31%, 20%);
--screen1-background: hsl(224, 36%, 15%);

  /*? #### keys */
  --blue-key-background: hsl(225, 21%, 49%);
  --blue-key-background-hover: hsl(226, 40%, 74%);
  --key1-shadow: hsl(224, 28%, 35%);

--key1-background-toggle: hsl(6, 63%, 50%);
--key11-shadow: hsl(6, 70%, 34%);
--key11-shadow-hover: hsl(6, 85%, 68%);

--orange-key-background: hsl(30, 25%, 89%);
--orange-key-shadow: hsl(28, 16%, 65%);

/*? #### Text */

--grayish-blue: hsl(221, 14%, 31%);
--White: hsl(0, 0%, 100%);

/* ! theme 2 */

/*? #### Backgrounds */

--main2-background: hsl(0, 0%, 90%);
--toggle2-background-keypad-background: hsl(0, 5%, 81%);
--screen2-background: hsl(0, 0%, 93%);

/*? #### Keys */

--cyan-key-background: hsl(185, 42%, 37%);
--cyan-key-background-hover: #4faab2;
--key2-shadow: hsl(185, 58%, 25%);

--key2-background-toggle: hsl(25, 98%, 40%);
--key2-background-toggle-hover: #fc964d;
--key-shadow: hsl(25, 99%, 27%);

--yellow-key-background: hsl(45, 7%, 89%);
--orange-key-shadow: hsl(35, 11%, 61%);

/* ?#### Text */

--Very-grayish-yelow: hsl(60, 10%, 19%);
--color-white: hsl(0, 0%, 100%);

/*! ### Theme 3 */

/*? #### Backgrounds */

--main3-background: hsl(268, 75%, 9%);
--screen3-background: hsl(268, 71%, 12%);

/*? #### Keys */

--violet-key-background: hsl(281, 89%, 26%);
--key31-shadow: hsl(285, 91%, 52%);

--key3-background-toggle: hsl(176, 100%, 44%);
--key3-shadow: hsl(177, 92%, 70%);

--Very-dark-violet-key-background: hsl(268, 47%, 21%);
--magenta-key-shadow: hsl(290, 70%, 36%);

/*? #### Text */

--Light-yellow: hsl(52, 100%, 62%);
--Very-dark-blue: hsl(198, 20%, 13%);



}

/* theme 3*/
.theme3{
 background-color: var(--main3-background);
    color: var(--Light-yellow);
    main{
        background-color: var(--screen3-background);
    }
    .header{
        .head{
            .color-content{
      background-color:var(--screen3-background);
    }
            .number{
                color: var(--Light-yellow);
            }
        }
       input{
        background-color: var(--screen3-background);
        color: var(--Light-yellow);
       }
       h4{
        color: var(--Light-yellow);

       }
    }
    .number{
       button{
   background-color: var(--Very-dark-violet-key-background);
   color: var(--Light-yellow);
   box-shadow: 0px 2.5px var(--magenta-key-shadow);
   &:hover{
    background-color: var( --violet-key-background);
   }
}
.del{
    background-color: var( --violet-key-background);
    box-shadow: 0px 3px var(--magenta-key-shadow);
    color: #fff;
    &:hover{
     background-color: var( --key31-shadow);
    }
}

 }
  .reset{
    .res{
    background-color: var( --violet-key-background);
    box-shadow: 0px 3px var(--magenta-key-shadow);
    color: #fff;
    &:hover{
     background-color: var(--key31-shadow);
    }
  }
  .equal{
    background-color: var(--key3-background-toggle);
    box-shadow: 0px 3px var(--key3-shadow);
    color: var(--Very-dark-blue);
    &:hover{
     background-color: var(--key3-shadow);
    }
  }
 }
 .switch-container{
    h5{
        color: var(--Light-yellow);
    }
 }
}
/* theme 2 */
.theme2{
    background-color: var(--main2-background);
    color: var(--Very-grayish-yelow);
    main{
        background-color: var(--toggle2-background-keypad-background);
    }
    .header{
        .head{
            .color-content{
      background-color:var(--toggle2-background-keypad-background);
    }
            .number{
                color: var(--Very-grayish-yelow);
            }
        }
       input{
        background-color: var(--screen2-background);
        color: var(--Very-grayish-yelow);
       }
       h4{
        color: var(--Very-grayish-yelow);
       }
    }
    .number{
       button{
   background-color: var(--yellow-key-background);
   color: var(--grayish-blue);
   box-shadow: 0px 2.5px var(--orange-key-shadow);
   &:hover{
    background-color: var(--color-white);
   }
}
.del{
 background-color: var( --cyan-key-background);
 box-shadow: 0px 3px var(--key2-shadow);
 color: #fff;
 &:hover{
  background-color: var( --cyan-key-background-hover);
 }
}

 }
 .reset{
    .res{
    background-color: var( --cyan-key-background);
    box-shadow: 0px 3px var(--key2-shadow);
    color: #fff;
    &:hover{
     background-color: var( --cyan-key-background-hover);
    }
  }
  .equal{
    background-color: var(--key2-background-toggle);
    box-shadow: 0px 3px var(--key11-shadow);
    color: #fff;
    &:hover{
     background-color: var(--key2-background-toggle-hover);
    }
  }
 }
 .switch-container{
    h5{
        color: var(--Very-grayish-yelow);
    }
 }
}
/* theme1 */
.theme1{
  background-color: var(--main1-background);
    color: var(--Very-grayish-yelow);
    main{
      background-color: var(--toggle1-background-keypad-background);
    }
    .header{
        .head{
          color: #fff;
            .color-content{
              background-color: var(--screen1-background);
    }
            .number{
                color: var(--White);
            }
        }
       input{
        background-color: var(--screen1-background);
        color: var(--Very-grayish-yelow);
        color: #fff;
       }
       h4{
       color: #fff;
       }
    }
    .number{
       button{
        background-color: var(--orange-key-background);
        color: var(--grayish-blue);
        box-shadow: 0px 2.5px var(--orange-key-shadow);
   &:hover{
    background-color: var(--color-white);
   }
}
.del{
  background-color: var(  --blue-key-background);
  box-shadow: 0px 3px var(--key1-shadow);
 color: #fff;
 &:hover{
  background-color: var(  --blue-key-background-hover);
 }
}

 }
 .reset{
  button{
    color: #fff;
  }
    .res{
   
    background-color: var(--blue-key-background);
    box-shadow: 0px 3px var(--key1-shadow);
    color: #fff;
    &:hover{
      background-color: var(--blue-key-background-hover);
    }
  }
  .equal{
    background-color: var(--key1-background-toggle);
    box-shadow: 0px 3px var(--key11-shadow);
    &:hover{
      background-color: var(--key11-shadow-hover);
    }
  }
 }
 .switch-container{
    h5{
        color: var(--White);
    }
 }
}
`