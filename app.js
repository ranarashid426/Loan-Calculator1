document.getElementById('loan-form').addEventListener('submit',function (e) {
    const loader = document.getElementById('loading')
    const results = document.getElementById('results')
    results.style.display = 'none'
    loader.style.display = 'block'

    setTimeout(calculateResults,2000)





    e.preventDefault()
    
} )

function calculateResults() {

    console.log('calculating')
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')

    // UI VARS
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')
// calculated values

    const principal = parseFloat(amount.value)
    const calculatedInterest = parseFloat((interest.value)/100/12)

    const calculatedPayment = parseFloat(years.value) * 12

    // COMPUTE MONTHLY PAYMENTS
    const x = Math.pow(1+calculatedInterest,calculatedPayment)
    const monthly = (principal*x*calculatedInterest) /(x-1)
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly*calculatedPayment).toFixed(2)
        
        totalInterest.value = ((monthly*calculatedPayment)-principal.toFixed(2))
        document.getElementById('results').style.display = 'block'
        document.getElementById('loading').style.display = 'none'
        // amount.value = ""
        // interest.value = ""
        // years.value = ""


    } else {
       showError('Please check your values')
       document.getElementById('results').style.display = 'none'
        document.getElementById('loading').style.display = 'none'
    }





 
}

function showError(error) {
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    const errorDiv = document.createElement('div')
    errorDiv.className = 'alert alert-danger'
    errorDiv.appendChild(document.createTextNode(error))

    card.insertBefore(errorDiv,heading)

    setTimeout(() => {
        document.querySelector('.alert').remove()
    },3000)
}
