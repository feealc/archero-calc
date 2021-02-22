
function dump_obj_console(obj)
{
    console.log(JSON.stringify(obj, null, 4))
}

function funcTeste()
{
    console.log("funcTeste() - inicio")
    // toggleCssClass("alert-teste", "display-none")

    // $('#exampleModal').modal('show');

    $('#exampleModal').on('show.bs.modal', function (event) {
        // var button = $(event.relatedTarget) // Button that triggered the modal
        // var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Teste')

        var modal_body = "teste1" + "<br><br>" + "teste2"
        modal.find('.modal-body').text(modal_body)
        // modal.show()
    })

    var options = {
        'backdrop' : true,
        'keyboard' : true
    }
    // $('#exampleModal').modal(options);
    $('#exampleModal').modal();

    // $('#exampleModal').on('show.bs.modal', function (e) {
    //     console.log("Modal is successfully shown!")
    // });

    $('#exampleModal').on('show.bs.modal', function (event) {
        // var button = $(event.relatedTarget) // Button that triggered the modal
        // var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        // modal.find('.modal-title').text('New message to ' + recipient)
        // modal.find('.modal-body input').val(recipient)
        modal.show()
    })


    console.log("funcTeste() - fim")
}

function hideResetResult(elementId)
{
    var element = document.getElementById(elementId)
    element.textContent = ""
    element.classList.add("display-none")
}

function addCssClass()
{
    var element = document.getElementById(elementId)
    element.classList.add(className)
}

function removeCssClass(elementId, className)
{
    var element = document.getElementById(elementId)
    element.classList.remove(className)
}

function toggleCssClass(elementId, className)
{
    var element = document.getElementById(elementId)
    element.classList.toggle(className)
}
