const giftsGiverName = ["teddy bear", "drone", "doll"];
const thankYouMessages = [];

function writeCards(giftsGiverName, giftName)
{
    for (let i = 0; i < giftsGiverName.length; i++)
        thankYouMessages.push(`Thank you, ${giftsGiverName[i]}, for the wonderful ${giftName} gift!`);

    return thankYouMessages;
}

function countDown(index)
{
    for (let i = index; i >= 0; i--)
        console.log(i);
}