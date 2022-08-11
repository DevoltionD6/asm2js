
var i = 0;

function nhapvao() 
{
    
    i++;
    var name = document.getElementById("ten").value
    var toan = document.getElementById("toan").value
    var ly = document.getElementById("ly").value
    var hoa = document.getElementById("hoa").value
    var hocsinh = {
        name: name.toUpperCase(),
        toan: toan,
        ly: ly,
        hoa: hoa,
       
    }
    document.getElementById("ten").value = "";
    document.getElementById("toan").value = "";
    document.getElementById("ly").value = "";
    document.getElementById("hoa").value = "";

    
        var table = document.getElementById("myTable");
        
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        
        cell1.innerHTML = i;
        cell2.innerHTML = hocsinh.name;
        cell3.innerHTML = hocsinh.toan;
        cell4.innerHTML = hocsinh.ly;
        cell5.innerHTML = hocsinh.hoa;
        cell6.innerHTML = "";
        

    
}

function trungbinh ()
{   
    var table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length ; i++)
    {
        
        let dong_hien_tai = table.rows[i];
        let diemToan =parseFloat( dong_hien_tai.cells[2].innerHTML);
        let diemLy =parseFloat( dong_hien_tai.cells[3].innerHTML);
        let diemHoa =parseFloat( dong_hien_tai.cells[4].innerHTML);

        var diemtrungbinh =(diemHoa + diemLy + diemToan)/3 ;
        dong_hien_tai.cells[5].innerHTML = diemtrungbinh;
    }
   
}

function hocsinhgioi ()
{
    var table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length ; i++)
    {
        let dong_hien_tai = table.rows[i];
        let diemToan =parseFloat( dong_hien_tai.cells[2].innerHTML);
        let diemLy =parseFloat( dong_hien_tai.cells[3].innerHTML);
        let diemHoa =parseFloat( dong_hien_tai.cells[4].innerHTML);
        
        if ( diemToan >= 8 && diemLy >= 8 && diemHoa >= 8)
        {
            dong_hien_tai.style.color = "red";
        }
        
    }
}