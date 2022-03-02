<template>
  <div id="event">
    <div class="box-v1">
      <div class="container">
        <div class="flex">
          <div class="flex-col">
            <h1>Halo, designer! 👋</h1>
            <br />
            <p>
              Selamat datang, terima kasih telah berkunjung, kami membutuhkan
              pembuat logo untuk tim kami yaitu degovan, apakah anda berkenan?,
              kami membuka tawaran harga senilai <b>Rp. 1.000.000</b>
            </p>
            <br />
            <p>Syarat & ketentuan</p>
            <br />
            <ul>
              <li>Peserta wajib mengsubmit karyanya di website degovan.com</li>
              <li>
                Logo harus bersifat unik dan tidak boleh meniru karya yang sudah
                ada.
              </li>
              <li>Peserta mengumpulkan file preview berformat png atau jpg</li>
              <li>Peserta wajib follow akun ig @degovan.it</li>
            </ul>
          </div>
          <div class="flex-col">
            <div class="flex-form">
              <form action="" method="">
                <p>Nama <span class="optional">*</span></p>
                <input type="name" autocomplete="off" />
                <br /><br />
                <p>Email <span class="optional">*</span></p>
                <input
                  type="email"
                  id="email"
                  list="providers"
                  autocomplete="off"
                />
                <br /><br />
                <p>Nomor Hp <span class="optional">*</span></p>
                <input type="text" autocomplete="off" />
                <br /><br />
                <p>Alamat <span class="optional">*</span></p>
                <input type="text" autocomplete="off" />
                <br /><br />
                <p>Filosofi logo <span class="optional">*</span></p>
                <input type="text" autocomplete="off" />
                <br /><br />
                <p>Instagram <span class="optional">*</span></p>
                <input type="text" autocomplete="off" />
                <br /><br />
                <label for="fileupload">
                  <span type="button" class="file-text">
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                    Upload file logo
                  </span>
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    id="fileupload"
                    name="fileupload"
                    @change="getFiles"
                    multiple
                  />
                </label>
                <div id="fileList" class="file-list"></div>
                <button class="btn btn-primary btn-radius btn-full">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      getFiles: function() {
        var name = document.getElementById("fileupload");
        var output = document.getElementById("fileList");
        var children = "";
        for (var i = 0; i < name.files.length; ++i) {
          children +=
            "<button type='button'> <ion-icon name='image-outline'></ion-icon> " +
            name.files.item(i).name +
            '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' +
            "</button>";
        }
        output.innerHTML = children;
      },
    },
    mounted() {
      var providers = [
        "gmail.com",
        "ymail.com",
        "yahoo.com",
        "hotmail.com",
        "att.net",
        "comcast.com",
        "outlook.com",
        "inbox.com",
        "hushmail.com",
        "aol.com",
        "easy.com",
        "sky.com",
        "caramail.com",
        "care2.com",
        "fastmail.com",
        "mail.com",
        "mail2web.com",
        "mailinater.com",
        "mail.lycos.com",
        "fastmail.fm",
        "dodgeit.com",
        "example.com",
        "example.org",
        "test.com",
        "me.com",
        "icloud.com",
        "hushmail.com",
        "hushmail.me",
        "hush.com",
        "hush.ai",
        "mac.hush.com",
        "dds.nl",
        "fastmail.fm",
        "html-5.me",
        "gmx.de",
        "zoho.com ",

        "12move.nl",
        "alice.nl",
        "bit.nl",
        "casema.nl",
        "chello.nl",
        "cistron.nl",
        "compuserve.com",
        "cs.com",
        "concepts.nl",
        "dataweb.nl",
        "dds.nl",
        "demon.nl",
        "etrade.nl",
        "euronet.nl",
        "hccnet.nl",
        "mailhost.hetnet.nl",
        "home.nl",
        "introweb.nl",
        "kabelfoon.nl",
        "luna.nl",
        "multiweb.nl",
        "nl.net",
        "onetelnet.nl",
        "orange.nl",
        "planet.nl",
        "scarlet.nl",
        "solcon.nl",
        "superweb.nl",
        "tele2.nl",
        "telfort.nl",
        "tiscali.nl",
        "upcnl",
        "nl.net",
        "wanadoo.nl",
        "planet.nl",
        "planet.nl",
        "xs4all.nl",
        "zeelandnet.nl",
        "ziggo.nl",
        "zonnet.nl",
      ];

      var datalist = document.createElement("datalist"),
        emailInput = document.getElementById("email"),
        listReady = false,
        option;

      var createOption = function(optionVal) {
        option = document.createElement("option");
        option.appendChild(document.createTextNode(optionVal));
        return option;
      };

      var addOption = function(val) {
        providers.forEach(function(i) {
          datalist.appendChild(createOption(val + i));
        });
      };

      if (typeof emailInput.addEventListener != "undefined") {
        emailInput.addEventListener(
          "keyup",
          function(e) {
            if (e.keyCode === 50 || e.keyCode === 220) {
              datalist.id = email.getAttribute("list");
              document.body.appendChild(datalist);
              listReady = true;
            }
            if (listReady) {
              datalist.innerHTML = "";
              addOption(this.value.replace(/@.+$/, "@"));
            }
          },
          false
        );
      }
    },
  };
</script>
