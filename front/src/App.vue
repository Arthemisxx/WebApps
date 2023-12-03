<template>
  <router-view />
</template>
 

<style>
.window-ringing {
  width: 320px;
  height: 650px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: url(/workspace/WebApps/front/src/assets/callingbackground.png)
    no-repeat fixed center;
  background-size: 320px;
  z-index: 0;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.window {
  width: 320px;
  height: 650px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: url(/workspace/WebApps/front/src/assets/iphoneBackground1.png)
    no-repeat fixed center;
  background-size: 320px;
  z-index: 0;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.clearfix:after {
  content: "";
  clear: both;
  display: table;
}
.close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1.15em;
}
.box {
  text-align: center;
}
.text {
  font-size: 20px;
  font-weight: bold;
  margin-top: 100px;
  color: #fff;
}
.header,
.form-number {
  margin-bottom: 12px;
}
.header {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
}
.form-label {
  font-size: 32px;
  font-weight: 600;
}
.form-number {
  width: 200px;
  height: 55px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 25px;
  letter-spacing: 2px;
  text-align: center;
  border: none;
}

.grid-item,
.call-button-bottom {
  position: relative;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  font-size: 22px;
  font-weight: 600;
  line-height: 75px;
  background: #e5e5e5;
  cursor: pointer;
  color: black;
  border: 0cm;
  border-radius: 50px;
  margin: 0 auto;
  align-content: center;
  line-height: 0px;
}

.grid-delete {
  padding: 22px;
  font-size: 20px;
  cursor: pointer;
  visibility: hidden;
}

.grid-item:hover {
  filter: brightness(80%);
}

.call-button {
  position: relative;
  width: 60px;
  height: 60px;
  vertical-align: middle;
  font-size: 22px;
  font-weight: 600;
  line-height: 60px;
  background: #34c759;
  cursor: pointer;
  color: white;
  border: 0cm;
  border-radius: 50px;
  margin: 0 auto;
  align-content: center;
}

.call-button-bottom {
  margin-top: 345px;
}
.call-button:hover {
  filter: brightness(80%);
}

.end-button {
  background-color: #ff443b;
}

.main {
  height: 60%;
  margin-top: 109px;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  margin-left: 25px;
  width: 231px;
  row-gap: 10px;
}

.call-item {
  grid-column: 2;
}

.end-icon {
  transform: rotate(135deg);
}

.error {
  border: 1px solid #ff0000;
  background: rgb(255, 170, 170);
}
</style>
