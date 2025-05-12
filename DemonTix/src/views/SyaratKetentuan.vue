<script setup>
import { ref } from 'vue'

const tabs = [
  { id: 'definisi', name: 'Definisi & Interpretasi' },
  { id: 'ketentuan', name: 'Ketentuan Umum' },
  { id: 'cookies', name: 'Cookies & Hak Cipta' },
  { id: 'pengembalian', name: 'Kebijakan Pengembalian Uang' },
]

const activeTab = ref('definisi')
</script>

<template>
  <section class="py-4 mt-3 mb-4">
        <div class="container">
            <div class="d-none d-sm-none d-md-block">
                <h2 class="mb-4"> Syarat dan Ketentuan </h2>
                <div class="row">
                    </div>
                    <div class="col-12">
                        <div class="tab-content mt-4">
                                <h5> Definisi & Interpretasi </h5><br>
                                <ul>
                                    <li> Seluruh persetujuan “Konsumen”, ”Kamu”, dan “Anda” menggantikan kamu, yaitu orang atau badan hukum yang mengakses website ini. </li>
                                    <li> Menyetujui syarat dan ketentuan perusahaan “ARTATIX”,”Penyedia Layanan”, dan “Kami” sebagai perusahaan kami (Artatix). </li>
                                    <li> “Member”, ”Event Creator”, ”Panitia”, dan “Mereka” menggantikan klien kami yang menggunakan system kami untuk membuat dan menjual tiket acara/event mereka. </li>
                                    <li> “Pembeli” berarti setiap individu dan/atau badan hukum yang membeli dengan harga tertentu atau secara cuma-cuma tiket yang diselenggarakan oleh Event Creator secara sah dan sesuai dengan ketentuan penggunaan ini, syarat dan ketentuan yang berlaku pada tempat Event, syarat dan ketentuan yang ditetapkan oleh Event Creator, serta peraturan perundang-undangan yang berlaku. </li>
                                    <li> “Situs” berarti artatix.co.id yang dikelola dan dimiliki oleh ARTATIX. </li>
                                    <li> “Event” berarti sesuatu kegiatan yang bersifat komersial maupun tidak komersial yang diselenggarakan oleh Event Creator yang menggunakan jasa layanan Platform kami untuk menunjang kegiatan acara tersebut. </li>
                                    <li> “Artatix.com” berarti adalah layanan yang kami sediakan untuk kamu Event Creator berupa penyediaan platform untuk menunjang Event yang memberikan kemudahan dengan penggunaan teknologi untuk Event Creator guna membuat, memasarkan, menjual, dan/atau mendistribusikan event secara mandiri, dimana layanan tersebut dapat berubah dari waktu ke waktu berdasarkan kebijakan kami sendiri. </li>
                                    <li> “Biaya Jasa” berarti biaya jasa sebagai imbalan kepada kami atas jasa atau produk layanan kami, termasuk namun tidak terbatas pada penyediaan Platform guna menunjang Event kamu, baik berupa uang, presentase maupun jasa yang dapat dinilai, yang kami tetapkan dari waktu ke waktu berdasarkan kebijakan kami sendiri. </li>
                                </ul>

                                <h5> Ketentuan Umum </h5><br>
                                <ul>
                                    <li> Jika terjadi konflik atau inkonsistensi antara dua atau lebih ketentuan antara kami dan pengguna, maka penyedia layanan yang memutuskan ketentuan mana yang akan digunakan. </li>
                                    <li> Kesepakatan ini berlaku ketika kamu dan event creator menggunakan system kami (menjual tiket, membuat event, menyunting event, mengunduh data, menyunting data, dan membeli tiket). </li>
                                    <li> Selain ketentuan penggunaan ini dan tergantung pada layanan yang dipilih oleh kamu. Kamu wajib untuk membaca dan menerima aturan dan ketentuan layanan tersebut yang mungkin akan berlaku untuk layanan tersebut. </li>
                                    <li> ARTATIX akan mengumumkan setiap perubahan melalui Platform. Event Creator diwajibkan untuk membaca dengan baik setiap perubahan tersbut sehingga apabila event creator tetap mengunakan, mengakses atau memanfaatkan Platform dianggap telah mengetahui, memahami dan menyetujui perubahan tersebut. </li>
                                    <li> Seluruh pemesanan tiket oleh pembeli pada cara yang dibuat oleh event manager memiliki ketentuan dan persetujuan yang terpisah dengan ketentuan ini. Kami hanya penyedia layanan yang membantu memaksimalkan acara event creator, yang mana seluruh penjualan merupakan properti event creator. Kami tidak bertanggun jawab dan kamu setuju membebaskan kami dari seluruh tuntutan jika terjadi perselisihan, penuntutan hak, permintaan kompensasi kematian akibat menghadiri acara dan seluruh hak langsung dan tidak langsung yang disebabkan oleh event creator. </li>
                                </ul>

                                <h5> Cookies & Hak Cipta </h5><br>
                                <p>Kami menggunakan penggunaan cookie. Dengan menggunakan situs web ARTATIX anda menyetujui penggunaan cookie sesuai dengan kebijakan privasi ARTATIX. Sebagian besar situs web interaktif modern menggunakan cookie untuk memungkinkan kami mengambil detail pengguna untuk setiap kunjungan. Cookie digunakan di beberapa area situs kami untuk mengaktifkan fungsionalitas area ini dan kemudahan penggunaan bagi orang-orang yang berkunjung. Beberapa mitra afliasai / iklan kami juga dapat menggunakan cookie.</p>
                                <h5> Hak Cipta </h5><br>
                                <p>Artatix dan/ atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi yang ada di Artatix. Semua hak kekayaan intelektual dilindungi. Anda dapaat melihat dan/atau mencetak halaman dari artatix.co.id untuk penggunaan pribadi. Anda tunduk pada batasan yang ditetapkan dalam syarat dan ketentuan ini.</p>
                                <ul>
                                  <li>Event creator sebagai penyelenggara acara dilarang mengeksploitasi data pengguna untuk kepentingan pribadi atau organisasional tanpa izin dari kami.</li>
                                  <li>Pengguna dilarang untuk menyalin, modifikasi atau membuat karya turunan dari platform ini.</li>
                                  <li>Pengguna dilarang untu menyalin, memodifikasi, atau mengirim e-Tiket tanpa sepengetahuan dari kami dan event creator.</li>
                                  <li>Event creator tidak diizinkan untuk meminta data lebih dari customer tanpa sepengetahuan dan izin kami.</li>
                                  <li>Pengguna tidak diizinkan menggunakan phising, robot, spider, atau semacam virus lain untuk mengambil keuntungan pribadi atau sesuatu yang melawan hukum dengan mengatasnamakan kami..</li>
                                </ul>

                                <h5> Kebijakan Pengembalian Uang </h5><br>
                                <p>Berikut adalah kebijakan pengembalian dana kami, setiap pembelian atau transaksi akan mencapai persyaratan yang berbeda. Silahkan baca dengan cermat ketentuan dibawah ini:</p>
                                <ul>
                                  <li>Seluruh tiket pembeli yang telah dibeli tidak bias diuangkan kembali.</li>
                                  <li>Pengembalian dana hanya untuk pembeli yang memiliki kendala dalam proses pembayaran, contoh seperti system bank dalam proses perbaikan atau error.</li>
                                  <li>Kami menghimbau kamu untuk tidak menjual tiketmu ke orang lain. Setiap kendala atau masalah yang disebabkan dari aktivitas tersebut bukan tanggungjawab kami.</li>
                                  <li>Jika kamu ingin menjual tiketmu, kamu sebaiknya mengkonfirmasikan terlebuh dahulu kepada event creator atau kami.</li>
                                  <li>Kami dapat mengembalikan danamu jika ada bukti transaksi. Jika tidak, tidak kami layani.</li>
                                  <li>Bukti transaksi dapat berupa struk transfer atau mutasi rekening.</li>
                                  <li>Setiap pengembalian dana yang disebabkan oleh Force Majeure akan diatur oleh event creator. Ketentuan yang berlaku pada proses tersebut adalah ketentuan yang ada pada pihak event creator, dan diluar dari tanggung jawab kami.ak langsung dan tidak langsung yang disebabkan oleh event creator.</li>
                                </ul>
                              </div>
                        </div>
                    </div>
                </div>
    </section>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
h5 {
  font-weight: bold;
}
@media (max-width: 768px) {
  aside {
    flex-direction: row;
    overflow-x: auto;
  }
}
</style>
