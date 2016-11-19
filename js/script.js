$(function(){
    function Search(txt) {
        $.getJSON("https://pixabay.com/api/?key=3118779-be29778b1b1db18e334fc6de3&q=" + txt + "&image_type=photo",
        function(data) {
            if (data.total == 0) {
                $("<p/>").text("Картинки по данному запросу не найдены").addClass("not-found").appendTo(".search-result");
                } else {
                    $.each(data.hits, function(i, item) {
                        var linkAdd = $("<a/>").attr({'href': item.pageURL,
                        'target': '_blank'}).addClass("found-img").appendTo(".search-result");
                        $("<img/>").attr("src", item.previewURL).appendTo(linkAdd);
                    });
                }
            });
        };

    $(".search-button").on('click', function () {
        var txt = $(".search-text").val();
        Search(txt);
    });

    $(".search-clear").on("click", function () {
        $(".search-result").empty();
        $(".search-text").val('');
    });

    $(".search-text").on('click', function () {
        $(this).val('');
    });

    $(".search-text").on("keypress", function(e) {
        $(".search-result").empty();
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            $(".search-result").empty();
            var txt = $(".search-text").val();
            Search(txt);
            return false;
        }
    })

        //*****HOME WORK. PART 2*****

        function Human() {
            this.name = 'Vasya';
            this.age = '25';
            this.sex = 'man';
            this.growth = '1.75 m';
            this.weight = '70 kg';
        };

        function Student(study, scholarship) {
            Human.apply(this, arguments);
            this.name = 'Oleg';
            this.study = study;
            this.scholarship = scholarship;
            this.watchTV = function () {
                console.log('Oh, it is my favorite serial! I like watch TV.')
            }
        };

        function Worker(work, salary) {
            Human.apply(this, arguments);
            this.work = work;
            this.salary = salary;
            this.working = function () {
                console.log('Hard coding');
            }
        };

        Student.prototype = Object.create(Human.prototype);
        Worker.prototype = Object.create(Human.prototype);

        var developer = new Worker('Goit', '1000 usd');
            Studens = new Student('NAU', '100 usd');

        console.log('Person:', developer.name);
        console.log('Works at', developer.work);
        console.log('Salary:', developer.salary);
        developer.working();

        console.log('Person:', Studens.name);
        console.log('Age:', Studens.age);
        console.log('Student of:', Studens.study);
        console.log('Scholarship:', Studens.scholarship);
        Studens.watchTV();

});
