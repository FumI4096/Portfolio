<?php


    class Form{

        public function submitWork(){
            if(isset($_POST['fname']) && !(empty($_POST['fname']))){
                return True;
            }
            else{
                return False;
            }
        }

        public function submitText(){
            if(isset($_POST['submit'])){
                if($this->submitWork()){
                    return "Your message is received";
                }
                else{
                    return "Please fill the contents";
                }
            }

        }
            
    }

    $form = new Form();
    


?>