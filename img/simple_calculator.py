# import everything from tkinter module
from tkinter import *

expression = ""


def press(num):
    global expression
    expression = expression + str(num)
    equation.set(expression)


def equal_press():

    global expression
    total = str(eval(expression))
    equation.set(total)
    expression = ""
    '''except:
        equation.set(" error ")
        expression = ""'''


def clear():
    global expression
    expression = ""
    equation.set("")


# Driver code
if __name__ == "__main__":

    gui = Tk()
    gui.configure(background="powder blue")
    gui.title("Simple Calculator")
    gui.geometry("317x300")

    equation = StringVar()

    expression_field = Entry(gui, textvariable=equation)

    expression_field.grid(columnspan=6, ipadx=90)

    button1 = Button(gui, text=' 1 ', fg='black', bg='white', command=lambda: press(1), height=3, width=10)
    button1.grid(row=3, column=0)

    button2 = Button(gui, text=' 2 ', fg='black', bg='white', command=lambda: press(2), height=3, width=10)
    button2.grid(row=3, column=1)

    button3 = Button(gui, text=' 3 ', fg='black', bg='white', command=lambda: press(3), height=3, width=10)
    button3.grid(row=3, column=2)

    button4 = Button(gui, text=' 4 ', fg='black', bg='white', command=lambda: press(4), height=3, width=10)
    button4.grid(row=2, column=0)

    button5 = Button(gui, text=' 5 ', fg='black', bg='white', command=lambda: press(5), height=3, width=10)
    button5.grid(row=2, column=1)

    button6 = Button(gui, text=' 6 ', fg='black', bg='white', command=lambda: press(6), height=3, width=10)
    button6.grid(row=2, column=2)

    button7 = Button(gui, text=' 7 ', fg='black', bg='white', command=lambda: press(7), height=3, width=10)
    button7.grid(row=1, column=0)

    button8 = Button(gui, text=' 8 ', fg='black', bg='white', command=lambda: press(8), height=3, width=10)
    button8.grid(row=1, column=1)

    button9 = Button(gui, text=' 9 ', fg='black', bg='white', command=lambda: press(9), height=3, width=10)
    button9.grid(row=1, column=2)

    button0 = Button(gui, text=' 0 ', fg='black', bg='white', command=lambda: press(0), height=3, width=10)
    button0.grid(row=4, column=1)

    plus = Button(gui, text=' + ', fg='black', bg='white', command=lambda: press("+"), height=3, width=10)
    plus.grid(row=4, column=3)

    minus = Button(gui, text=' - ', fg='black', bg='white', command=lambda: press("-"), height=3, width=10)
    minus.grid(row=3, column=3)

    multiply = Button(gui, text=' * ', fg='black', bg='white', command=lambda: press("*"), height=3, width=10)
    multiply.grid(row=2, column=3)

    divide = Button(gui, text=' / ', fg='black', bg='white', command=lambda: press("/"), height=3, width=10)
    divide.grid(row=1, column=3)

    equal = Button(gui, text=' = ', fg='black', bg='white', command=equal_press, height=3, width=10)
    equal.grid(row=5, column=3)

    clear = Button(gui, text='Clear', fg='black', bg='white', command=clear, height=3, width=10)
    clear.grid(row=4, column=0)

    Decimal = Button(gui, text='.', fg='black', bg='white', command=lambda: press('.'), height=3, width=10)
    Decimal.grid(row=4, column=2)

    gui.mainloop()
