# Fibabanka Fintern Software Engineer (Frontend) Case - Abdullah Erek

Projeyi zip olarak indirip editörde açın veya git clone ile projeyi localinize ekleyin.


Install and run on android

```bash
cd Fintern-SoftwareEngineerCase-AbdullahErek
npm install
react-native run-android
```

Install and run on ios

```bash
cd Fintern-SoftwareEngineerCase-AbdullahErek
npm install
react-native run-ios
```

Kurulumdan sonra refresh atmayı unutmayalım :)

Projede Gereksinimleri:
```bash
Herhangi bir dilde bir mobil uygulama geliştirin. 
(Android Native, iOS Native, React-Native, Flutter)

```

Senaryo:
[1-)](#api-islemleri) Bir API aracalığıyla veriler üzerinde işlemler yapılmalıdır.

[2-)](#acilis-sayfasi) Uygulama ilk başladığında ana sayfaya yönlendirecektir.

[3-)](#kaydirilabilir-gonderi-listesi) Kaydırılabilir 10 adet gönderi burada yer alacaktır.

[4-)](#gonderi-bicimi) Her gönderinin bir yazarı ve içeriği olmalıdır.

[5-)](#sayfa-yenileme) Sayfa en üstten çekildiğinde yenileme işlemi yapılacaktır.

[6-)](#siramala) Sayfa aşağı kaydırıldığında daha eski gönderiler yüklenecektir.

[7-)](#gonderi-detayi) Her gönderinin kendine ait tekil bir sayfası olacaktır.

[8-)](#gonderi-detayi) Ana sayfada yer alan gönderilerde 100 karakter sınırlaması
varken, detay görünümünde içeriğin tamamı gelmelidir.

[9-)](#geri-donus-islemi) Detay sayfasından ana sayfaya geri dönülmelidir ve daha önce
kaydırma yapılan pozisyona geri dönülmelidir.

### API İşlemleri
Uygulamada bir film datası barındıran The MovieDB API kullanılmıştır. (https://www.themoviedb.org/documentation/api?language=tr)
API key ile en popüler filmler data olarak alınmıştır.

### Açılış Sayfası
Uygulamanın açılış sayfası "HomePage" olarak belirlenmiştir.

### Kaydırılabilir Gönderi Listesi
Uygulama ilk çalıştığında API üzerinden gelen veriler home ekranında kaydırılabilir olarak listelenmektedir.

### Gönderi Biçimi
Ana ekranda her gönderinin başlığı, 100 karakterden oluşan kısa özeti, çıkış tarihi ve IMDB puanı yer almaktadır.

### Sayfa Yenileme
Uygulamada yer alırken en üstten çekildiğinde sayfa tekrar yüklenmektedir. Sayfa tekrar yüklenirken veriler
API üzerinden tekrar çekilmektedir.

### Sıralama
Uygulama içerisindeki gönderiler filmlerin çıkış tarihine göre sıralanmaktadır. En yeni film en üstte, çıkış tarihi
en eski olan film en altta sıralanmaktadır.

### Gönderi Detayı
Her gönderinin bir detay sayfası bulunmaktadır. Başlık üzerine tıklandığında o filmin açıklamasının tamamı, başlığı, çıkış tarihi
ve posteri detay sayfasında yer almaktadır.

### Geri Dönüş İşlemi
Detay sayfasından geri dönüş işlemi yapıldığında ana sayfaya geri dönülür ve en son kaydırma işlemi nerede kaldıysa aynı yere gelinmiş olur.
Kısaca, geri dönüş işlemlerinde sayfa yeniden yüklenmez ve en üstten başlamaz.




